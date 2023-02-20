import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, {
    ReactNode, useEffect, useRef, useState,
} from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className, children, isOpen, onClose,
    } = props;

    const { isClosing, setIsClothing } = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const { t } = useTranslation();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClothing]: isClosing,
    };

    const onCLoseHandler = () => {
        if (onClose) {
            setIsClothing(true);
            timeRef.current = setTimeout(() => {
                onClose();
            }, ANIMATION_DELAY);
        }
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => () => {
        clearTimeout(timeRef.current);
    }, []);

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={onCLoseHandler}>
                <div className={cls.content} onClick={onContentClick}>
                    { children }
                </div>
            </div>
        </div>
    );
};
