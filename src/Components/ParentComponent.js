import React, { useCallback, useState } from 'react'
import ButtonComponent from './ButtonComponent';
import ClasspureComponent from './ClasspureComponent';
import Counter from './Counter';
import DataCount from './DataCount';
import Title from './Title';

const ParentComponent = () => {
    const [age, setAge] = useState(10);
    const [salary, setSalary] = useState(10000);

    // call back is hook
    const incrementAge = useCallback(() => {
        setAge(age + 5);
    },[age]);

    const incrementSalary = useCallback (() => {
        setSalary(salary + 1000);
    },[salary]);

    return (
        <div>
            <ClasspureComponent />
            <Title />
            <ButtonComponent handleClick={incrementAge}>increment age</ButtonComponent>
            <DataCount count={salary} text="salary" />
            <ButtonComponent handleClick={incrementSalary}>increment Salary</ButtonComponent>
            {/* <Counter /> */}
        </div>
    )
}

export default ParentComponent;