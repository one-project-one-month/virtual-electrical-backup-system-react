const CreateInverterPage = () => {
  // interface formValue  {
  //       type: FormDataEntryValue | null,
  //       watt: FormDataEntryValue | null,
  //       wave_type: FormDataEntryValue | null,
  //       model: FormDataEntryValue | null,
  //       brand: FormDataEntryValue | null,
  //       compatible_battery: FormDataEntryValue | null,
  //       input_volt: FormDataEntryValue | null,
  //       output_volt: FormDataEntryValue | null,
  //       price:FormDataEntryValue | null,
  //   }
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
                <button>Create</button>
        </form>
        </>)
};

export default CreateInverterPage;
