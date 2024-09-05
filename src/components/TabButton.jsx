export default function TabButton({ children, onClick }) {
    console.log('TABBUTTON COMPONENT EXECUTING');
    return (
     <li>
        <button className="active" onClick={ onClick }>{ children }</button>
    </li>
    );
}