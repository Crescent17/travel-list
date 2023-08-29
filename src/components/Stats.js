export default function Stats({items}) {
    if (!items.length) return <p className='stats'><em>Start adding some items to your packing list 🚀</em></p>
    const numItems = items.length
    const numPacked = items.filter(item => item.packed).length
    const percent = (numPacked / numItems * 100).toFixed(2)
    return <footer className='stats'>
        <em>
            {numPacked === numItems ? 'You got everything! Ready to go ✈️' : `💼 You have ${numItems} items on your list and you already packed ${numPacked} (${percent}%)`}
        </em>
    </footer>
}