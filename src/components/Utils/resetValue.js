const resetValue = (
    jobDetail,
    locationForm,
    benefitForm,
    jobRequirementForm,
    responsibilitiesForm
) => {
    let job_detail = jobDetail.map((item) => {
        return {
            ...item,
            value: item.value
        };
    });
    let location_form = locationForm.map((item) => {
        return {
            ...item,
            value: item.value
        };
    });
    let benefit_form = benefitForm.map((item) => {
        return {
            ...item,
            value: item.value
        };
    });
    let job_requirement_form = jobRequirementForm.map((item) => {
        return {
            ...item,
            value: item.value
        };
    });
    let responsibilities_form = responsibilitiesForm.map((item) => {
        return {
            ...item,
            value: item.value
        };
    });
    return {
        jobDetail: job_detail,
        locationForm: location_form,
        benefitForm: benefit_form,
        jobRequirementForm: job_requirement_form,
        responsibilitiesForm: responsibilities_form
    };
};
export default resetValue;
