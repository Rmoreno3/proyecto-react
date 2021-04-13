import React from 'react';

import '../pages/styles/BadgeEdit.css';
import heroLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import Api from '../api';
import api from '../api';

class BadgeEdit extends React.Component {
  state = { 
    loading: true,
    error: null,
    form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
    } 
  };

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })
    
    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )

      this.setState({ loading: false, form: data})
    } catch (error) {
      this.setState({ loading: false, error: error})
    }
  }
  
  handleChange = (e) => {
    // const nextForm = this.state.form;
    // nextForm[e.target.name] = e.target.value;

    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({ loading: true, error: null })

    try {
      await Api.badges.update(this.props.match.params.badgeId, this.state.form)
      this.setState({ loading: false })
      
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    if (this.state.loading === true) {
      return <PageLoading />
    }
    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img 
            className="img-fluid" 
            src={heroLogo} 
            alt="logo"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge 
                firstName={this.state.form.firstName || 'first'} 
                lastName={this.state.form.lastName || 'last'} 
                jobTitle={this.state.form.jobTitle || 'JOB'}
                email={this.state.form.email || 'email'}
                twitter={this.state.form.twitter || 'Twitter'} 
                avatarUrl ="https://www.gravatar.com/avatar/f4aa4d1d31eb1f0577e8c63f8a28c719?d=identicon"
              />
            </div>
            <div className="col">
              <h1>Edit Attendant</h1>
              <BadgeForm 
                onChange={this.handleChange} 
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;