import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
	className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
	const divs = new Array(12).map(() => <div />);

	return (
		<div className={classNames(cls.Loader, {}, [className])}>
			<div className={classNames(cls.ldsSpinner)}>{divs}</div>
		</div>
	);
};
