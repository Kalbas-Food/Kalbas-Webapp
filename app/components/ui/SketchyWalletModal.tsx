import React, {useState} from 'react';
import {Box, Typography, IconButton} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SketchyContainer from './SketchyContainer';
import SketchyButton from './SketchyButton';
import SketchyIconButton from './SketchyIconButton';
import SketchyTextField from './SketchyTextField';
import {styled} from '@mui/material/styles';

interface SketchyWalletModalProps {
    open: boolean;
    onClose: () => void;
    currentBalance?: number;
}

const presetOptions = [10000, 20000, 50000];

const formatNumber = (num: number) =>
    num.toLocaleString('fa-IR');

function toEnglishNumber(num: number | string) {
    return num.toLocaleString('en-US');
}

const SketchyWalletModal: React.FC<SketchyWalletModalProps> = ({open, onClose, currentBalance = 0}) => {
    const theme = useTheme();
    const [amount, setAmount] = useState(20000);
    const [isEditing, setIsEditing] = useState(false);
    const amountInputRef = React.useRef<HTMLInputElement>(null);

    function handlePresetClick(val: number) {
        setAmount(val);
    }

    function handleIncrement() {
        setAmount((prev) => prev + 1000);
    }

    function handleDecrement() {
        setAmount((prev) => (prev > 1000 ? prev - 1000 : 1000));
    }

    function handleAmountInput(e: React.ChangeEvent<HTMLInputElement>) {
        let val = e.target.value.replace(/[^0-9]/g, '');
        let num = Number(val);
        if (isNaN(num)) num = 0;
        setAmount(num);
    }

    function handleAmountDisplayClick() {
        setIsEditing(true);
        setTimeout(() => amountInputRef.current?.focus(), 0);
    }

    function handleAmountInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            setIsEditing(false);
        }
    }

    function handleAmountInputBlur() {
        setIsEditing(false);
    }

    if (!open) return null;

    return (
        <Box
            className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/30"
            onClick={onClose}
            role="presentation"
            style={{minHeight: '100vh', minWidth: '100vw'}}
        >
            <Box
                className="flex items-center justify-center w-full h-full"
                style={{pointerEvents: 'none'}}
            >
                <SketchyContainer
                    disableActiveTransform
                    className="relative w-full flex flex-col items-center gap-8 shadow-xl"
                    sx={{
                        background: theme.palette.background.paper,
                        borderRadius: 12,
                        minWidth: { xs: '90vw', sm: 350 },
                        maxWidth: { xs: '95vw', sm: 480 },
                        px: { xs: 2, sm: 8 },
                        py: { xs: 4, sm: 12 },
                        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
                    }}
                    onClick={e => {
                        e.stopPropagation();
                    }}
                    style={{pointerEvents: 'auto'}}
                >
                    <IconButton
                        onClick={onClose}
                        aria-label="Close"
                        sx={{
                            position: 'absolute',
                            width: 40,
                            height: 40,
                            top: 12,
                            right: 12,
                            color: theme.palette.text.primary,
                            background: 'transparent',
                            boxShadow: 'none',
                            '&:hover': {
                                background: theme.palette.action.hover,
                            },
                        }}
                    >
                        <span style={{fontSize: 32, fontWeight: 'bold', color: 'inherit', lineHeight: 1}}>&times;</span>
                    </IconButton>

                    <Box className="w-full flex flex-col items-center gap-2 mb-2">
                        <Typography variant="h4" className="font-extrabold text-center"
                                    sx={{fontFamily: 'inherit', fontWeight: 800, fontSize: { xs: 22, sm: 32 }}}>
                            Increase Credit
                        </Typography>
                        <Typography variant="body1" className="text-gray-500 text-center"
                                    sx={{fontFamily: 'inherit', fontWeight: 500, fontSize: { xs: 15, sm: 20 }}}>
                            Current Balance: <span className="font-bold">{toEnglishNumber(currentBalance)}</span> Toman
                        </Typography>
                    </Box>
                    {/* Responsive preset buttons: stack on xs, row on sm+ */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: { xs: 2, sm: 3 },
                            mb: 2,
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {[10000, 20000, 50000].map((opt) => (
                            <SketchyButton
                                key={opt}
                                variant={amount === opt ? 'contained' : 'outlined'}
                                onClick={() => handlePresetClick(opt)}
                                className="text-lg flex items-center justify-center"
                                sx={{
                                    borderRadius: 14,
                                    fontWeight: 700,
                                    fontSize: { xs: 15, sm: 20 },
                                    width: { xs: '100%', sm: 128 },
                                    height: { xs: 40, sm: 56 },
                                    background: theme.palette.background.paper,
                                    color: theme.palette.text.primary,
                                    boxShadow: 'none',
                                    border: 'none',
                                    transition: 'all 0.15s',
                                    ...(amount === opt && {
                                        background: theme.palette.action.selected,
                                        color: theme.palette.getContrastText(theme.palette.primary.main),
                                    })
                                }}
                            >
                                {opt === 10000 && '10K TOMAN'}
                                {opt === 20000 && '20K TOMAN'}
                                {opt === 50000 && '50K TOMAN'}
                            </SketchyButton>
                        ))}
                    </Box>
                    <Box className="flex items-center justify-center gap-4 sm:gap-10 w-full mt-2 mb-2">
                        <SketchyIconButton onClick={handleDecrement} aria-label="Decrease"
                                           sx={{borderRadius: 10, fontSize: { xs: 22, sm: 32 }, width: { xs: 40, sm: 48 }, height: { xs: 40, sm: 48 }}}>
                            <span className="text-pink-500 text-2xl sm:text-3xl font-bold">-</span>
                        </SketchyIconButton>
                        <Box className="flex flex-col items-center min-w-[80px] sm:min-w-[120px]">
                            {isEditing ? (
                                <input
                                    ref={amountInputRef}
                                    value={amount}
                                    onChange={handleAmountInput}
                                    onBlur={handleAmountInputBlur}
                                    onKeyDown={handleAmountInputKeyDown}
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    style={{
                                        textAlign: 'center',
                                        fontSize: 28,
                                        fontWeight: 800,
                                        width: 90,
                                        border: 'none',
                                        outline: 'none',
                                        background: 'transparent',
                                        letterSpacing: 2,
                                        maxWidth: '100%',
                                    }}
                                    type="text"
                                />
                            ) : (
                                <Typography
                                    variant="h2"
                                    className="font-extrabold tracking-widest mb-1 cursor-pointer"
                                    sx={{ fontSize: { xs: 24, sm: 36 }, fontWeight: 800 }}
                                    onClick={handleAmountDisplayClick}
                                    tabIndex={0}
                                    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleAmountDisplayClick(); }}
                                >
                                    {toEnglishNumber(amount)}
                                </Typography>
                            )}
                            <Typography variant="body2" className="text-gray-500 mt-1 text-lg" sx={{fontWeight: 500, fontSize: { xs: 12, sm: 16 }}}>
                                {amount === 10000 ? 'ten thousand toman' : amount === 20000 ? 'twenty thousand toman' : amount === 50000 ? 'fifty thousand toman' : ''}
                            </Typography>
                        </Box>
                        <SketchyIconButton onClick={handleIncrement} aria-label="Increase"
                                           sx={{borderRadius: 10, fontSize: { xs: 22, sm: 32 }, width: { xs: 40, sm: 48 }, height: { xs: 40, sm: 48 }}}>
                            <span className="text-pink-500 text-2xl sm:text-3xl font-bold">+</span>
                        </SketchyIconButton>
                    </Box>
                    <SketchyButton
                        variant="contained"
                        className="w-full mt-4 py-4 text-2xl font-bold"
                        sx={{
                            color: theme.palette.getContrastText(theme.palette.primary.main),
                            border: 'none',
                            boxShadow: 'none',
                            borderRadius: 14,
                            fontSize: { xs: 18, sm: 26 },
                            fontWeight: 800,
                            letterSpacing: 0.5,
                            background: theme.palette.primary.main
                        }}
                    >
                        PAY
                    </SketchyButton>
                </SketchyContainer>
            </Box>
        </Box>
    );
};

export default SketchyWalletModal; 