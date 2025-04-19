const interestsComponent = interests =>
  interests
    .map(item => ` <div class="badge bg-primary">${item}</div>`)
    .join('');

export const userCardComponent = user => `
          <div
            class="col p-2"
            data-bs-toggle="tooltip"
            data-bs-title="${user.email}">
            <div class="container border border-1 rounded-2 shadow-sm h-100 px-3 py-4">
            <div class="d-flex gap-2">
              <img
                src="https://fakeimg.pl/250x100/"
                class="rounded-circle object-fit-cover d-block"
                style="width: 8rem; height: 8rem" />
              <div class="d-flex flex-column bg-text-secondary">
                <h5>${user.username}</h5>
                <p class="h6">${user.city}</p>
                <div class="d-flex flex-wrap gap-2 mt-3">
                ${interestsComponent(user.interests)}
                </div>
              </div>
            </div>
            </div>
          </div>
`;
