import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SectionTitle from './components/SectionTitle'
import { MdSearch } from 'react-icons/md';
import WorkItem from './components/WorkItem'
import WorksSectionItem from './components/WorksSectionItem';


const Worksstyled = styled.div`
padding: 5rem 0;
.works__allItems{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    text-align: center;
}
.works__serchbar {
    margin-left: 3rem;
}
form {
    display: contents;
}
`;

function Works() {
    const [Workdata, setWorkdata] = useState(WorksSectionItem);
    const [SerchText, setSerchText] = useState();


    const handleChange = (e) => {
        setSerchText(e.target.value)
        search(e.target.value)
    }

    // 検索欄への入力値での絞り込み
    const search = (value) => {
        // 検索欄への入力が空の場合は早期return
        if (value === "") {
            setWorkdata(WorksSectionItem);
            return;
        }

    const serchedPosts = WorksSectionItem.filter(
        (workitem) =>
              Object.values(workitem).filter(
                (item) =>
                  item !== undefined &&
                  item !== null &&
                  item.toUpperCase().indexOf(value.toUpperCase()) !== -1
              ).length > 0
          );
      
          setWorkdata(serchedPosts);
        }

  return (
      <Worksstyled>
        <div id='worktop'></div>
        <div className='container'>
            <SectionTitle
            heading='Works'
            subheading='すべての作品' />
            <div className='works__serchbar'>
                <form>
                    <input type="text" 
                    value={SerchText}
                    onChange={handleChange}
                    placeholder="作品・実績名"
                    />   
                        <MdSearch />
                </form>
            </div>
            <div className='works__allItems'>
                {Workdata.map((item) => (
                    <WorkItem 
                    key={item.id}
                    title={item.title}
                    desc={item.desc}
                    image={item.img}
                    url={item.url}
                    />
                ))}
            </div>
        </div>
    </Worksstyled>
  )
}

export default Works