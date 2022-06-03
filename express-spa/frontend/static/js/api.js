const fetchData = async () => {
    try {
        const url = "http://localhost:8080/boards";
        const option = {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await fetch(url, option);
        console.log(res);
        return res;
    } catch (e) {
        throw e;
    }
}