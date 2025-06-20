import { apiClient, API_ENDPOINTS } from '../config/api';
import type { ApiResponse } from '../config/api';

// Auth Types
export interface LoginRequest {
  identifier: string; // email or username
  password: string;
}

export interface SignupRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken?: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

// Token Management
export const TOKEN_KEY = 'auth_token';
export const REFRESH_TOKEN_KEY = 'refresh_token';
export const USER_KEY = 'user_data';

export const tokenService = {
  getToken: (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
  },

  setToken: (token: string): void => {
    localStorage.setItem(TOKEN_KEY, token);
  },

  removeToken: (): void => {
    localStorage.removeItem(TOKEN_KEY);
  },

  getRefreshToken: (): string | null => {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },

  setRefreshToken: (token: string): void => {
    localStorage.setItem(REFRESH_TOKEN_KEY, token);
  },

  removeRefreshToken: (): void => {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },

  getUser: (): User | null => {
    const userData = localStorage.getItem(USER_KEY);
    return userData ? JSON.parse(userData) : null;
  },

  setUser: (user: User): void => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  removeUser: (): void => {
    localStorage.removeItem(USER_KEY);
  },

  clearAll: (): void => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },
};

// Authentication Service
export class AuthService {
  private static instance: AuthService;

  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  /**
   * Login user with email/username and password
   */
  async login(credentials: LoginRequest): Promise<ApiResponse<AuthResponse>> {
    try {
      const response = await apiClient.post<AuthResponse>(
        API_ENDPOINTS.AUTH.LOGIN,
        credentials
      );

      if (response.success && response.data) {
        // Store tokens and user data
        tokenService.setToken(response.data.token);
        if (response.data.refreshToken) {
          tokenService.setRefreshToken(response.data.refreshToken);
        }
        tokenService.setUser(response.data.user);
      }

      return response;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  /**
   * Register new user
   */
  async signup(userData: SignupRequest): Promise<ApiResponse<AuthResponse>> {
    try {
      const response = await apiClient.post<AuthResponse>(
        API_ENDPOINTS.AUTH.SIGNUP,
        userData
      );

      if (response.success && response.data) {
        // Store tokens and user data
        tokenService.setToken(response.data.token);
        if (response.data.refreshToken) {
          tokenService.setRefreshToken(response.data.refreshToken);
        }
        tokenService.setUser(response.data.user);
      }

      return response;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  }

  /**
   * Logout user
   */
  async logout(): Promise<ApiResponse<void>> {
    try {
      const response = await apiClient.post<void>(API_ENDPOINTS.AUTH.LOGOUT);
      
      // Clear all stored data regardless of server response
      tokenService.clearAll();
      
      return response;
    } catch (error) {
      console.error('Logout error:', error);
      // Clear stored data even if server request fails
      tokenService.clearAll();
      throw error;
    }
  }

  /**
   * Refresh access token
   */
  async refreshToken(): Promise<ApiResponse<{ token: string }>> {
    try {
      const refreshToken = tokenService.getRefreshToken();
      if (!refreshToken) {
        throw new Error('No refresh token available');
      }

      const response = await apiClient.post<{ token: string }>(
        API_ENDPOINTS.AUTH.REFRESH,
        { refreshToken }
      );

      if (response.success && response.data) {
        tokenService.setToken(response.data.token);
      }

      return response;
    } catch (error) {
      console.error('Token refresh error:', error);
      // Clear all data if refresh fails
      tokenService.clearAll();
      throw error;
    }
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return !!tokenService.getToken();
  }

  /**
   * Get current user
   */
  getCurrentUser(): User | null {
    return tokenService.getUser();
  }

  /**
   * Update user data in storage
   */
  updateUser(user: User): void {
    tokenService.setUser(user);
  }
}

// Export singleton instance
export const authService = AuthService.getInstance(); 