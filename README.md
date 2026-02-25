# grocery-app-assignment

Link to live site: http://rideco-grocery-app-frontend.s3-website.ca-central-1.amazonaws.com

Tech Stack:
- Angular, HTML, CSS, AWS S3 bucket for frontend
- Django REST Framework/Python, AWS EC2 for backend API and data persistence

Docker was causing issues on my computer so I wasn't able to successfully test if all the components were working inside the container. Alternatively, `cd ./grocerylist/` and run `python manage.py runserver` and in a separate terminal `cd ./grocerylist-frontend/` and run `ng serve` to run locally.

## Conceptual Debugging

### Before
Previously when I exposed the service as an Observerable, each sub-component was working with its own local copy of the grocery items based on an initial fetch. Each sub-component separately called the service's http request functions while changing their own local copies, with no knowledge of what other sub-components were doing. This led to a responsiveness issue where updates to one sub-component did not immediately reflect in others. Since the database contains all updates from these separate function calls, the sub-components would only sync on reload, following the initial fetch of items from the database through the Observable service.

<img width="657" height="557" alt="image" src="https://github.com/user-attachments/assets/7d0ba054-731a-43cd-baf3-92a8881e1380" />

### After
After exposing the service as a BehaviorSubject, all sub-components instead refer to a central grocery items list inside the service and call service functions when they want to make updates or listen to changes. That way, components are now aware of each other's changes and sync immediately. State management and code is simpler now too since components no longer have the overhead of managing local copies.

<img width="641" height="548" alt="image" src="https://github.com/user-attachments/assets/61f8475c-0bdd-4d65-bc7e-5fc00792bf68" />

## Improvements

- Handle duplicate items
- Collapsable form
- Grid layout for items on desktop view
- Bigger improvements:
  - Support multiple grocery lists with date recorded (almost like a note-taking app)
    - Motivations: user may have multiple stores to visit and wants to keep lists separated based on store; user may have different contexts (e.g. a facilities manager may need separate lists for food for home vs food for an office kitchen); keeping note of items for the future
  - Multiple households instead of just one
  - Grocery list collaboration
