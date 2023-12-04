import { ISpinnerProps } from './Spinner.props';
import SpinnerIcon from './spinner.svg';

const Spinner = ({className, ...props}:ISpinnerProps) => { 
    return (
        <span>
            <SpinnerIcon className={className} {...props}/>
        </span>
    )
};

export default Spinner;