import React from 'react';

const VoteCell = (props) => {
    const {data} = props;

    return(
      
        data.map((item, i) => {
            return (
                <tr class="p-4 mb2 bg-info text-white">
                    <td key={i}>{item.votes}</td>
                    <td key={i}>{item.language}</td>
                    <td><button type="number"
                    >Click Here</button></td>
                </tr>
            )
        })
    )
}

export default VoteCell;