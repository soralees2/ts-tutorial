import * as React from 'react';

interface Props{
  name: string;
  job: string;
}

/* class Profile extends React.Component<Props>{
  render(){
    const {name, job} = this.props;

    return(
      <div>
        <h1>프로필</h1>
        <div>
          <b>이름 : </b>{name}
        </div>
        <div>
          <b>직업 : </b> {job}
        </div>
      </div>
    )
  }
} */

const Profile = ({ name, job }: Props) => (
  <div>
    <h1>Info</h1>
    <div>
      <b>이름 : </b>{ name }
    </div>
    <div>
      <b>직업 : </b> { job }
    </div>
  </div>
);

export default Profile;
