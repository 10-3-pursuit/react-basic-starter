import { useState } from "react";
import { Link } from "react-router-dom";

function filterSections(search, sections) {
    return sections.filter((section) => {
        return section.toLowerCase().match(search.toLowerCase());
    });
}

const Sections = ({ sections }) => {
    const [searchTitle, setSearchTitle] = useState('');
    const [currentSections, setCurrentSections] = useState(sections);

    const handleTextChange = (e) => {
        const title = e.target.value;
        const result = title.length ? filterSections(title, sections) : sections;
        setSearchTitle(title);
        setCurrentSections(result);
    }

    return (
        <div>
            <label htmlFor="searchTitle">
                Search Sections:
                <input
                    type="text"
                    value={searchTitle}
                    id="searchTitle"
                    onChange={handleTextChange}
                />
            </label>
            {currentSections.length >0 && currentSections.map((section) =>
                <section key={section}>
                    <Link to={`/sections/${sections.indexOf(section)}`} className="section-link">{section}</Link>
                </section>)}
        </div>
    )
}

export default Sections;