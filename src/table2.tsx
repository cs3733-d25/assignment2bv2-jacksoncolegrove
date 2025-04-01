function Table2() {
    return (
        <>
            <h3>Recent Race Results</h3>
            <table className="collapse">
                <caption><b>Recent Race Winners</b></caption>
                <tr>
                    <th>Race</th>
                    <th>Date</th>
                    <th>Driver</th>
                    <th>Team</th>
                </tr>
                <tr id="mclaren">
                    <td>China</td>
                    <td>23 Mar 2025</td>
                    <td>Oscar Piastri</td>
                    <td>McLaren Mercedes</td>
                </tr>
                <tr id="mclaren">
                    <td>Australia</td>
                    <td>16 Mar 2025</td>
                    <td>Lando Norris</td>
                    <td>McLaren Mercedes</td>
                </tr>
                <tr id="mclaren">
                    <td>Abu Dhabi</td>
                    <td>08 Dec 2024</td>
                    <td>Lando Norris</td>
                    <td>McLaren Mercedes</td>
                </tr>
                <tr id="redbull">
                    <td>Qatar</td>
                    <td>01 Dec 2024</td>
                    <td>Max Verstappen</td>
                    <td>Red Bull Racing Honda RBPT</td>
                </tr>
                <tr id="mercedes">
                    <td>Las Vegas</td>
                    <td>23 Nov 2024</td>
                    <td>George Russell</td>
                    <td>Mercedes</td>
                </tr>
            </table>
        </>
    )
}

export default Table2;