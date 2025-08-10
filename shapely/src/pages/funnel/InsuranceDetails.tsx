import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import { localStrings } from '../../utils/Constants';
import ButtonComponent from '../../components/Button';
import { IoIosLock } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useFunnel } from '../../context/FunnelContext';

const InsuranceDetails = () => {
    const [selectedInsurance, setSelectedInsurance] = useState(null)
    const navigate = useNavigate()
    const { handleProgressBar } = useFunnel()
    const insurance = [
        {
            label: "Aetna",
            value: "aetna"
        }
    ]
    return (
        <>
            <h1 className="!text-[28px] lg:!text-[52px] !text-[#231F20] !font-semibold !mt-8 !mb-2">
                {localStrings.ADD_YOUR_INSURANCE_DETAILS}
            </h1>
            <p className="text-[14px] lg:text-[22px] w-full lg:w-[70%] mx-auto !text-[#231F20] !mb-5">{localStrings.SHAPELY_IN_NETWORK_WITH_HEALTH_PLANS}</p>
            <div className='!w-full lg:!w-[40%] mx-auto'>
                <p className="!!text-sm lg:!text-lg mb-1 text-[#554A4D] text-left">{localStrings.INSURANCE_PLAN_LABEL}</p>
                <Select
                    value={selectedInsurance}
                    onChange={(e: any) => setSelectedInsurance(e)}
                    options={insurance}
                    className="stateSelect mb-4"
                />
                <Form.Group className="mb-3 text-left" controlId={localStrings.MEMBER_ID_KEY}>
                    <Form.Label className="!!text-sm lg:!text-lg !font-normal !text-[#554A4D]" style={{ marginBottom: "5px" }}>{localStrings.MEMBER_ID}</Form.Label>
                    <Form.Control className="!border-2 min-h-[52px] !border-[#F1DEDE]" type={localStrings.TYPE_NUMBER} name={localStrings.MEMBER_ID_KEY} />
                </Form.Group>
            </div>
            <ButtonComponent
                buttonText={localStrings.CONTINUE}
                handleButtonClick={() => {
                    handleProgressBar();
                    navigate("/funnel/check-information")
                }}
                className="border-0 left-[5%] lg:left-[40%] absolute bottom-[45px] lg:bottom-[20px] !mt-10" />
            <p className="text-xs sm:text-sm !text-[#231F20] absolute bottom-0 left-[12px] flex gap-2 items-center text-left">
                <IoIosLock />
                {localStrings.ALL_INFO_SECURE}
            </p>
        </>
    )
}

export default InsuranceDetails