import React, {ChangeEvent, FormEvent, useState, useEffect} from "react";

interface Props {
}

const TenantInput: React.FC<Props> = ({}) => {

    const [name, setName] = useState<string>('');
    const [serial, setSerial] = useState<string>('');
    const [type, setType] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("tenant: " + name);
        console.log("serial: " + serial);
        console.log("type:" + type);
    };

    const onTenantChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const onSerialChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSerial(e.target.value);
    };
    
    const onTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setType(e.target.value);
    };

    useEffect(() => {
        console.log('Component mounted');
        return () => {
            console.log('Component will be unmounted');
        }
    }, []);

    useEffect(() => {
        console.log(`Any state changed Name: ${name}, Controller Serial: ${serial}`);
    });

    useEffect(() => {
        console.log(`Name changed: ${name}`);
    }, [name]);

    return (
        <form onSubmit={handleSubmit}>
                <input type="text" placeholder="tenant name" value={name} onChange={onTenantChange}/>
                <input type="text" placeholder="controller serial" value={serial} onChange={onSerialChange} />
                <input type="text" placeholder="hmd type" value={type} onChange={onTypeChange} />
                <button type="submit"> Submit </button>
        </form>
    )
};

export default TenantInput;