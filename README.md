- Responsive loin page design
- handle loin process -
   1> store login user data 
   2> handle API authentication 
   3> handle token expire 
- show dashbord for basic operation of show existing users, add user and update user 

**Libraries used**
   - vite
   - react
   - tailwind
   - typescript 
   - axios

**Auth flow**

User Login
   ↓
Access Token → React memory
Refresh Token → HTTP-only cookie
   ↓
API call
   ↓
401?
   ↓
Call /refresh
   ↓
Get new access token
