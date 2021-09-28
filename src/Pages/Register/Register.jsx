import React, { useState } from 'react';
import StepAvator from '../RegistrationSteps/StepAvator/StepAvator';
import StepFullName from '../RegistrationSteps/StepFullName/StepFullName';
import StepOtp from '../RegistrationSteps/StepOtp/StepOtp';
import StepPhoneEmail from '../RegistrationSteps/StepPhoneEmail/StepPhoneEmail';
import StepUsername from '../RegistrationSteps/StepUsername/StepUsername';
import styles from './Register.module.css';

const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
    3: StepFullName,
    4: StepAvator,
    5: StepUsername
};

const Register = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    const onNext = () => {
        setStep(step + 1);
    }

    return (
        <div>
            <Step onNext={onNext} />
        </div>
    )
}

export default Register;
