import Card from "./Card";
import './DateWidgit.css'
const DateWidgit = (props) => {
    const dateObj = new Date(props.date);
    const year = dateObj.getFullYear();
    const month = dateObj.toLocaleString('en-US',{month:'long'});
    const day = dateObj.toLocaleString('en-US',{day:'2-digit'});
    return (
        <Card className="date-widgit">
            <div className="date-widgit__month">{month}</div>
            <div className="date-widgit__year">{year}</div>
            <div className="date-widgit__day">{day}</div>
        </Card>
    )
}
export default DateWidgit;