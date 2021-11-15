import './Header.css'

export default ({black}) => {
    return (
        <header className={black ? "black" : ''}>
            <div className='header--logo'>
                <a href="/">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='netflix'/>
                </a>
            </div>

            <div className='header--user'>
                <a href="/">
                    <img src='https://avatars.githubusercontent.com/u/83479925?s=400&u=0d9d80de63ed39f984b5157755ea89d62c2bf025&v=4'/>
                </a>
            </div>
        </header>
    )
}
// eslint-disable-next-line