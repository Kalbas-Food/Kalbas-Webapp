import React, {useState} from 'react';
import {Box, Typography, IconButton} from '@mui/material';
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
                    className="relative w-full max-w-lg px-8 py-12 flex flex-col items-center gap-8 shadow-xl"
                    sx={{
                        background: 'background.paper',
                        borderRadius: 12,
                        minWidth: 350,
                        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)'
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
                            width: 48,
                            height: 48,
                            top: 16,
                            right: 16,
                            color: 'text.primary',
                            background: 'transparent',
                            boxShadow: 'none',
                            '&:hover': {
                                background: 'rgba(255, 255, 255, 0.1)',
                            },
                        }}
                    >
                        <span style={{fontSize: 48, fontWeight: 'bold', color: 'inherit', lineHeight: 1}}>&times;</span>
                    </IconButton>

                    <Box className="w-full flex flex-col items-center gap-2 mb-2">
                        <Typography variant="h4" className="font-extrabold text-center"
                                    sx={{fontFamily: 'inherit', fontWeight: 800, fontSize: 32}}>
                            Increase Credit
                        </Typography>
                        <Typography variant="body1" className="text-gray-500 text-center"
                                    sx={{fontFamily: 'inherit', fontWeight: 500, fontSize: 20}}>
                            Current Balance: <span className="font-bold">{toEnglishNumber(currentBalance)}</span> Toman
                        </Typography>
                    </Box>
                    <Box className="flex flex-row gap-6 mb-2 w-full justify-center">
                        {[10000, 20000, 50000].map((opt) => (
                            <SketchyButton
                                key={opt}
                                variant={amount === opt ? 'contained' : 'outlined'}
                                onClick={() => handlePresetClick(opt)}
                                className="w-32 h-14 text-lg flex items-center justify-center"
                                sx={{
                                    borderRadius: 14,
                                    fontWeight: 700,
                                    fontSize: 20,
                                    background: amount === opt ? '#f4f4f4' : '#f4f4f4',
                                    color: 'text.primary',
                                    boxShadow: 'none',
                                    border: 'none',
                                    transition: 'all 0.15s'
                                }}
                            >
                                {opt === 10000 && '10K TOMAN'}
                                {opt === 20000 && '20K TOMAN'}
                                {opt === 50000 && '50K TOMAN'}
                            </SketchyButton>
                        ))}
                    </Box>
                    <Box className="flex items-center justify-center gap-10 w-full mt-2 mb-2">
                        <SketchyIconButton onClick={handleDecrement} aria-label="Decrease" className="w-12 h-12"
                                           sx={{borderRadius: 10, fontSize: 32}}>
                            <span className="text-pink-500 text-3xl font-bold">-</span>
                        </SketchyIconButton>
                        <Box className="flex flex-col items-center min-w-[120px]">
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
                                        fontSize: 36,
                                        fontWeight: 800,
                                        width: 140,
                                        border: 'none',
                                        outline: 'none',
                                        background: 'transparent',
                                        letterSpacing: 2,
                                    }}
                                    type="text"
                                />
                            ) : (
                                <Typography
                                    variant="h2"
                                    className="font-extrabold tracking-widest text-4xl mb-1 cursor-pointer"
                                    sx={{ fontSize: 36, fontWeight: 800 }}
                                    onClick={handleAmountDisplayClick}
                                    tabIndex={0}
                                    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleAmountDisplayClick(); }}
                                >
                                    {toEnglishNumber(amount)}
                                </Typography>
                            )}
                            <Typography variant="body2" className="text-gray-500 mt-1 text-lg" sx={{fontWeight: 500}}>
                                {amount === 10000 ? 'ten thousand toman' : amount === 20000 ? 'twenty thousand toman' : amount === 50000 ? 'fifty thousand toman' : ''}
                            </Typography>
                        </Box>
                        <SketchyIconButton onClick={handleIncrement} aria-label="Increase" className="w-12 h-12"
                                           sx={{borderRadius: 10, fontSize: 32}}>
                            <span className="text-pink-500 text-3xl font-bold">+</span>
                        </SketchyIconButton>
                    </Box>
                    <SketchyButton
                        variant="contained"
                        className="w-full mt-4 py-4 text-2xl font-bold"
                        sx={{
                            color: '#fff',
                            border: 'none',
                            boxShadow: 'none',
                            borderRadius: 14,
                            fontSize: 26,
                            fontWeight: 800,
                            letterSpacing: 0.5
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