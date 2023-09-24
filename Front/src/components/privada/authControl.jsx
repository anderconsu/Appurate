const CheckAuth = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        navigate("/login");
    }
    try {
        const auth = await fetch(`${hostUrl}/user/authCheck`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        if (auth.status === 200) {
            return true;
        } else {
            navigate("/login");
        }
    } catch (error) {
        console.error(error);
        setError("Error, inténtalo más tarde");
    }
};

export default CheckAuth;
