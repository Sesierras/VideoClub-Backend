import axios from "axios";

function movie() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(`mongodb+srv://Administrador:Admin1342**@videoclubdatabase.ry0toej.mongodb.net/?retryWrites=true&w=majority`).then((res) => {
            setUser(res.data);
        });
    }, []);
}