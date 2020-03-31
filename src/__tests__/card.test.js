import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Card from '../components/Card';

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

//HEY JEST, IM MOCKING THE DATA
it('renders user data', async () => {
    const fakeUser = {
        name: {
            first: "Ben",
            last: "Remy"
        },
        email: "remy@digitalcrafts.com"
    };

    //FAKE JSON FETCH
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeUser)
        })
    )

    await act(async () => {
        render(<Card user={fakeUser}/>, container);
    })

    expect(container.querySelector("h2").textContent)
    .toContain(fakeUser.name.first, fakeUser.name.last);

    expect(container.textContent).toContain(fakeUser.email);

    global.fetch.mockRestore();
})