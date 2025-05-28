import React from 'react'
import IndividualComment from './IndividualComment'

const CommentList = ({ data }) => {
    return data.map((c, index) => (
      <div key={index} className='w-[100%]'>
        <IndividualComment data={c?.snippet?.topLevelComment?.snippet} />
      </div>
    ));
}

export default CommentList