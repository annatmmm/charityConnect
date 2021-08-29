import Sample from '../assets/sample.png'
import './result.css';

const Result = () => {
    return (
        <div className="result_display">
            <table className="result_table">
                <tr className="result_data">
                    <td>
                        <img className="r_graphic" src={Sample}/>
                    </td>
                    <td>
                    Ray of Hope Community Centre
                    <br/>
                    659 King St E #230 Kitchener
                    <br/>
                    Addiction Treatment
                    <br/>
                        ACTION ICONS
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Result;