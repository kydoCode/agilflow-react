describe('User Story CRUD Operations', () => {
  let createdStoryId;

  it('should create a new user story', () => {
    cy.request({
      method: 'POST',
      url: '/userStories',
      body: {
        user: 1, // Replace with a valid user ID
        action: 'Write a test',
        need: 'To ensure the application works correctly',
        assignedTo: 1, // Replace with a valid user ID
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('user');
      expect(response.body).to.have.property('action');
      expect(response.body).to.have.property('need');
      expect(response.body).to.have.property('assignedTo');
      createdStoryId = response.body.id;
    });
  });

  it('should read the created user story', () => {
    cy.request({
      method: 'GET',
      url: `/userStories/${createdStoryId}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', createdStoryId);
      expect(response.body).to.have.property('user');
      expect(response.body).to.have.property('action');
      expect(response.body).to.have.property('need');
      expect(response.body).to.have.property('assignedTo');
    });
  });

  it('should update the created user story', () => {
    cy.request({
      method: 'PUT',
      url: `/userStories/${createdStoryId}`,
      body: {
        action: 'Write an updated test',
        need: 'To ensure the application works correctly with updates',
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', createdStoryId);
      expect(response.body).to.have.property('action', 'Write an updated test');
      expect(response.body).to.have.property('need', 'To ensure the application works correctly with updates');
    });
  });

  it('should delete the created user story', () => {
    cy.request({
      method: 'DELETE',
      url: `/userStories/${createdStoryId}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
