import { useState } from "react";

const useInput = (validate) =>
{
    const [isValid, setIsValid] = useState(null);
    const [wasTouched, setWasTouched] = useState(false);
    let hasError = !isValid && wasTouched;

    const onBlurHandler = (event) =>   
    {   
        setWasTouched(true);
        setIsValid(validate(event.target.value));
    }

    const onChangeHandler = (event) =>
    {
        setIsValid(validate(event.target.value));
    }

    const onSumbitHandler = (event) =>
    {
        setWasTouched(false);
        setIsValid(null);
    }
    
    return {
        isValid,
        wasTouched,
        onBlurHandler,
        onChangeHandler,
        onSumbitHandler,
        hasError
    };
}

export default useInput;