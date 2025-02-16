import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ManageInverter() {
    const [isEdit, setIsEdit]  = useState(false);
    const { id }  = useParams();
    useEffect(() => {
        setIsEdit(Boolean(id))
    }, [id])
    interface formValue  {
        type: FormDataEntryValue | null,
        watt: FormDataEntryValue | null,
        wave_type: FormDataEntryValue | null,
        model: FormDataEntryValue | null,
        brand: FormDataEntryValue | null,
        compatible_battery: FormDataEntryValue | null,
        input_volt: FormDataEntryValue | null,
        output_volt: FormDataEntryValue | null,
        price:FormDataEntryValue | null,
    }
    const submit = async (formValues:formValue) => {
        const method = isEdit ? "put" : "post";
        const url = isEdit ? `inverter/${id}` : "inverter";
        console.log(method)
        console.log(url)
        console.log(formValues)
    }
    return (
        <>
            <form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget)
                    const formValues = {
                        type: formData.get("type"),
                        watt: formData.get("watt"),
                        wave_type: formData.get("waveType"),
                        model: formData.get("model"),
                        brand: formData.get("brand"),
                        compatible_battery: formData.get("compatibleBattery"),
                        input_volt: formData.get("inputVolt"),
                        output_volt: formData.get("outputVolt"),
                        price:formData.get("price"),
                    }
                    console.log(formValues)
                        submit(formValues)
                }}>
                <input type="text" name="type" />
                <input type="text" name="watt" />
                <input type="text" name="waveType" />
                <input type="text" name="model" />
                <input type="text" name="brand" />
                <input type="text" name="compatibleBattery" />
                <input type="text" name="inputVolt" />
                <input type="text" name="outputVolt" />
                <input type="text" name="price" />
                <button>{ isEdit? "Edit":"Create"}</button>
        </form>
        </>
    )
}
export default ManageInverter