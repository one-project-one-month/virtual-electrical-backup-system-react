import React from "react";

import { useNavigate } from "react-router-dom";

import BatteryBrandCombo from "../battery/BatteryBrandCombo";
import BatteryTypeCombo from "../battery/BatteryTypeCombo";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CreateBatteryForm = () => {
    const navigate = useNavigate();

    type FormFeilds = {
        brand: string;
        type: string;
        name: string;
        storage_amp: number;
        voltage: number;
        description: string;
        image: string;
    };

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFeilds>();

    const [checked, setChecked] = useState(false);

    const onSubmit: SubmitHandler<FormFeilds> = (data) => {
        console.log("data", typeof data, data);

        if (checked) {
        console.log("Redirecting to manage battery...");
        navigate(`/admin/battery/`);
        } else {
        console.log("Checkbox not checked. Staying on the same page.");
        }
    };

    //for battery brand
    const [selectedBrand, setSelectedBrand] = React.useState("");
    //for battery type
    const [selectedType, setSelectedType] = React.useState("");

    return (
        <>
        <div className="container w-1/2 mt-5 mx-5 ">
            <form onSubmit={handleSubmit(onSubmit)}>
            {/* for aligning combo box */}
            <div className="flex justify-between ">
                {/* Battery Brand */}
                <div className=" text-xs text-gray-600 ">
                <label htmlFor="">Brand Name</label>
                <div className="flex gap-2 text-sm py-1">
                    <Controller
                    name="brand"
                    control={control}
                    rules={{ required: "Brand is required" }}
                    render={({ field }) => (
                        <BatteryBrandCombo
                        {...field}
                        onChange={(value) => {
                            field.onChange(value);
                            setSelectedBrand(value);
                        }}
                        />
                    )}
                    />
                    <Button
                    className="h-10 w-10 text-lg rounded-full"
                    variant="outline"
                    onClick={() => navigate(`/admin/brand/create`)}
                    >
                    +
                    </Button>
                </div>
                <p className="text-red-500 text-xs min-h-[20px]">
                    {errors.brand?.message || ""}
                </p>
                </div>
                {/* /Battery Type */}
                <div className=" gap-5 text-xs text-gray-600">
                <label>Type Name</label>
                <div className="flex gap-2 text-sm py-1">
                    <Controller
                    name="type"
                    control={control}
                    rules={{ required: "Type is required" }}
                    render={({ field }) => (
                        <BatteryTypeCombo
                        {...field}
                        onChange={(value) => {
                            field.onChange(value);
                            setSelectedType(value);
                        }}
                        />
                    )}
                    />
                    <Dialog>
                    <DialogTrigger asChild>
                        <Button
                        className="h-10 w-10 text-lg rounded-full"
                        variant="outline"
                        >
                        +
                        </Button>
                    </DialogTrigger>
                    {/* <DialogType /> */}
                    </Dialog>
                </div>
                <p className="text-red-500 text-xs min-h-[30px]">
                    {errors.type?.message || ""}
                </p>
                </div>
            </div>

            {/* Battery Name */}
            <div className="w-full text-sm text-gray-600 ">
                <label
                htmlFor=""
                className="after:ml-0.5 after:text-red-700 after:content-['*']"
                >
                Battery Name
                </label>
                <Input
                type="text"
                id="name"
                {...register("name", { required: "* Name required" })}
                />
                <p className="text-red-500 text-xs min-h-[30px]">
                {errors.name?.message || ""}
                </p>
            </div>

            <div className="flex justify-between gap-4">
                {/* Storage AMP */}
                <div className="w-full text-sm text-gray-600 ">
                <label
                    htmlFor=""
                    className="after:ml-0.5 after:text-red-700 after:content-['*']"
                >
                    Storage AMP
                </label>
                <Input
                    type="number"
                    id="storageAMP"
                    // name="storageAMP"
                    {...register("storage_amp", { required: "* Storage required" })}
                />
                <p className="text-red-500 text-xs min-h-[30px]">
                    {errors.storage_amp?.message || ""}
                </p>
                </div>

                {/* Battery Voltage */}
                <div className="w-full text-sm text-gray-600 ">
                <label
                    htmlFor=""
                    className="after:ml-0.5 after:text-red-700 after:content-['*']"
                >
                    Battery Volt
                </label>
                <Input
                    type="number"
                    id="voltage"
                    // name="voltage"
                    // onChange={handleChange}
                    {...register("voltage", { required: "* Voltage required" })}
                    placeholder=""
                />
                <p className="text-red-500 text-xs min-h-[30px]">
                    {errors.voltage?.message || ""}
                </p>
                </div>
            </div>

            {/* IMAGE  */}
            <div className="row-start-5 col-span-6 grid gap-2">
                <label
                className="text-xs text-gray-600"
                htmlFor="compatibleBattery"
                >
                Image
                </label>
                <Input
                type="file"
                className="text-sm placeholder:text-xs"
                id="image"
                placeholder="image"
                {...register("image", {
                    required: "* image required",
                })}
                />
            </div>
            <br />
            {/* Description */}
            <div className="w-full text-sm text-gray-600 ">
                <label
                htmlFor=""
                className="text-sm text-gray-600 after:ml-0.5 after:text-red-700 after:content-['*']"
                >
                Description
                </label>
                <textarea
                id="description"
                // name="description"
                // onChange={handleChange}
                {...register("description", {
                    required: "* description required",
                })}
                className="text-sm w-full text-gray-600 p-1"
                rows={3}
                />
                <p className="text-red-500 text-xs min-h-[20px]">
                {errors.description?.message || ""}
                </p>
            </div>

            <div className="flex items-center gap-4">
                <input
                className="size-4 inline"
                type="checkbox"
                id="redirect_to_battery"
                name="redirect_to_list"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                />
                <label
                className="text-gray-500 text-sm"
                htmlFor="redirect_to_inverter"
                >
                Redirect to manage battery
                </label>
            </div>

            <div className="container mx-5 flex col-span-6 gap-3 ">
                <Button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 mx-5 rounded-sm"
                >
                Save
                </Button>
                <Button
                onClick={() => navigate(`/admin/battery/`)}
                className="bg-blue-500 text-white px-4 py-2 rounded-sm"
                >
                Cancel
                </Button>
            </div>
            </form>
        </div>
        </>
    );
};

export default CreateBatteryForm;
