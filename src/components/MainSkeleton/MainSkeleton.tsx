import css from './MainSkeleton.module.css';

interface Props {
  children: JSX.Element;
}

function MainSkeleton({ children }: Props) {
  return <div className={css.main}>{children}</div>;
}

export default MainSkeleton;
