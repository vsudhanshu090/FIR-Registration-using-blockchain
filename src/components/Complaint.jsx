import React , {useState} from "react";
import {useAddress, useContract, useContractRead, useContractWrite, useMetamask} from "@thirdweb-dev/react";
import toast from "react-hot-toast";

const Complaint = () => {
    const address = useAddress();

    const [name , setName] = useState("");
    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");

    const { contract,isLoading,err } = useContract("0x8e87dAf9e8754F74256A4b06B4694Ea0bC79154e");
    console.log(err);
    console.log(isLoading);
    const { data: nextId } = useContractRead(contract, "nextId");
    const { mutateAsync: fileComplaint } = useContractWrite(contract, "fileComplaint");

    //console.log(contract);


    const handleComplaint = async () => {
        const notification = toast.loading("Filing complaint");
        try {
            const data = await fileComplaint({ args: [name, title, description] });
            console.info("contract call successs. Complaint submitted", data);
            toast.success(`Complaint filed. Your complaint ID is ${nextId}` , {id: notification});
            setName("");
            setTitle("");
            setDescription("");
        } catch (error) {
            //console.log(descro);
            toast.error("Something went wrong and your complaint wasn't submitted. Please try again" , {id: notification});
            console.error("Contract call failed. Cannot submit complaint" , error.message);
            console.error(error.stack);
        }
    }

    return (
        <div>
            <h2>file your complaint here</h2>
            <label>
                victim name : 
                <input type="text" onChange={(event => setName(event.target.value))}/>
            </label>
            <label>
                complaint title : 
                <input type="text" onChange={(event => setTitle(event.target.value))}/>
            </label>
            <label>
                complaint description : 
                <input type="text" onChange={(event => setDescription(event.target.value))}/>
            </label>
            <button onClick={handleComplaint}>submit complaint</button>
        </div>
    )
}

export default Complaint;