// export const userCardComponent = user => `
//           <div class="col p-2" title="${user.email}">
//           <div class="container h-100 border bg-body-secondary rounded-2 p-3 shadow">
//             <div class="d-flex gap-2">
//               <div class="col-5">
//                 <img src="${
//                   user.photo
//                 }" class="rounded-circle w-100 object-fit-cover" style="aspect-ratio: 1;" />
//               </div>
//               <div class="col-6">
//                 <h5 class="fw-semibold">${user.username}</h5>
//                 <p class="h6 fw-medium">${user.city}</p>
//                 <div class="d-flex flex-wrap gap-3">
//                   ${user.interests
//                     .map(item => `<div class="badge bg-primary">${item}</div>`)
//                     .join('')}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
// `;

const interestsComponent = interests =>
  interests
    .map(item => `<div class="badge text-bg-primary">${item}</div>`)
    .join('');

export const userCardComponent = user => `
          <div class="col p-3" title="Email: ${user.email}">
            <div
              class="container h-100 bg-body-secondary border border-1 rounded-1 shadow-sm p-3">
              <div class="d-flex flex-wrap justify-content-between">
                <div class="col-4">
                  <img
                    src="${user.photo}"
                    class="w-100 object-fit-cover rounded-circle"
                    style="aspect-ratio: 1" />
                </div>
                <div class="col-7">
                  <div class="mb-4 lh-1">
                    <h5>${user.username}</h5>
                    <p class="fs-6">${user.city}</p>
                  </div>
                  <div class="d-flex flex-wrap gap-1">
                    ${interestsComponent(user.interests)}
                  </div>
                </div>
              </div>
            </div>
          </div>`;
