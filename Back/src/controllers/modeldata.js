const getModelData = async (data) => {
    console.log(data);
    console.log("host de modelo", process.env.MODEL_HOST);
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
            console.log("resultado", result);
            return result;
        } else {
            return "error";
        }
    } catch (err) {
        console.log(err);
        return "error";
    }
};

export default getModelData;
