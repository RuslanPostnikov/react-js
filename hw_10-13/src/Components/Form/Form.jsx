import React from "react";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formSubmitted: false,
            form: []
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        let form = [];
        for (const el of e.target) {
            if(el.name !== '') {
                if(el.name === 'acceptRules') {
                    form.push({name: el.name, value: el.checked})
                } else {
                    form.push({name: el.name, value: el.value})
                }
            }
        }
        this.setState({form, formSubmitted: true});
    }

    renderTable = (form) => {
        form.sort((a, b) => a.name.localeCompare(b.name));
        return (
            <div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.setState({formSubmitted: false})}
                >
                    Back
                </button>
                <table className="table">
                    <tbody>
                    {form.map((input, index) => {
                        return <tr key={index}>
                            <td>{input.name}</td>
                            <td>{`${input.value}`}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }

    renderForm = () => {
        const form = {};
        this.state.form.map(input => form[input.name] = input.value);

        return (
            <form name="myForm" onSubmit={this.submitForm}>
                <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="col-form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="email" placeholder="Email"
                           defaultValue={form['email']}
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="password" className="col-form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password"
                           placeholder="Password"
                           defaultValue={form['password']}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="address" className="col-form-label">Address</label>
                    <textarea className="form-control" name="address" id="address"
                              placeholder="1234 Main St"
                              defaultValue={form['address']}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="city" className="col-form-label">City</label>
                    <input type="text" className="form-control" name="city" id="city"
                           defaultValue={form['city']}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="country" className="col-form-label">Country</label>
                    <select id="country" name="country" className="form-control"
                            defaultValue={form['country']}
                    >
                        <option>Choose</option>
                        <option value="argentina">Argentina</option>
                        <option value="russia">Russia</option>
                        <option value="china">China</option>
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="rules">
                            <input id="rules" type="checkbox" name="acceptRules" className="form-check-input"
                                   defaultChecked={form['acceptRules']}
                            />
                            Accept Rules
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        )
}

    render() {
        return (
            <>{!this.state.formSubmitted ? this.renderForm() : this.renderTable(this.state.form)}</>
        )
    }
}
