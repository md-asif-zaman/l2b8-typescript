const fetchUser = async () => {
    try {
        const res = await fetch("api/v1/something");
        const data = (await res.json());
        if (!res.ok || !data.success) {
            throw new Error(`Failed to fetch user data: ${data.message}`);
        }
        return data.data;
    }
    catch (error) {
        if (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            else {
                console.error("Something went wrong");
            }
        }
    }
};
const userData = await fetchUser();
if (userData) {
    console.log(userData.name);
}
export {};
