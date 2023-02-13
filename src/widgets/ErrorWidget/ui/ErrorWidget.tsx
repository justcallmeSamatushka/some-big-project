import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ErrorWidget.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface ErrorWidgetProps {
	className?: string;
}

export const ErrorWidget = ({ className }: ErrorWidgetProps) => {
	const { t } = useTranslation();

	const reloadPage = () => {
		location.reload();
	};

	return (
		<div className={classNames(cls.ErrorWidget, {}, [className])}>
			<p> {t('somethingError')}</p>
			<Button onClick={reloadPage}>{t('reload')}</Button>
		</div>
	);
};
