const getModelData = async (data) => {
    console.log(data);
    try {
        let response = await fetch(
            `${process.env.MODEL_HOST}/prediccion_niños`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );
        if (response.ok) {
            let result = await response.json();
            console.log(result);
            return result.prediction;
        } else {
            return "error";
        }
    } catch (err) {
        console.log(err);
        return "error";
    }
};

export default getModelData;
