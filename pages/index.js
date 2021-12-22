import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';

const Index = ({ notes }) => {
  console.log(notes, 'notes here')
  return (
    <div className="notes-container">
      <h1>Notes</h1>
      <div className="grid wrapper">
        {notes.map(note => {
          return (
            <div key={note._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/${note._id}`}>
                      <a>{note.title}</a>
                    </Link>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Link href={`/${note._id}`}>
                    <Button primary>View</Button>
                  </Link>
                  <Link href={`/${note._id}/edit`}>
                    <Button primary>Edit</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}


// getInitialProps from next.js function that would allow us to runs some code before the actuall component render out the page

// so this will we run server side 

Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/notes');

  //destructure the data , object in we have a data property
  const { data } = await res.json();

  console.log(data, 'data in index next function')

  // return object and give this object a property notes value will we data 
  return { notes: data }
}

export default Index;










//run server side 
//make api request to fetch the data that we need for the index page
// and then go to retun the data in actuall index page ,, going o retun the data using props
// Index.getInitialProps = async ()=>{
//   const res = await fetch('http://localhost:3000/api/notes');
//   const {data} = await res.json();

// // give the object a property notes
//   return {notes:data}

// }