import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4otvcld14hr01xkhbi62gwt/master',
  headers:{
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYxODcxNTYsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNG90dmNsZDE0aHIwMXhraGJpNjJnd3QvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYWYxZmY2ZWUtMzc1YS00NjM2LWEzMjgtYmI5MzllMGRjNGUxIiwianRpIjoiY2w0dWIya3U1MHFjYjAxdWkzMGpyZWJ2OCJ9.Ug0gi6sOLCkZZStRs1ey3U7nmVqX95MXUx6PZbo7htTrN2PI9Aq9mhYMXYg8wo9D5asKnCkAcHfohn9YekRkRB3El-AGjmhto0dXPjCeBcvLnkTPIBkQMdulYkSL5z4AJG5kLb-LijTFtrUg4YUuZ7G9LReoY111JLQmPA7TBPtd5mPS2wdwPwLH1fkblusfPPTJcK9PfLH40FLxAdYydHbPJ6LUYsvt20vTHcaxnrCmra7sSUmrPqH-uwwjlO831awx4LpBJR9i6Bue8pGGOT4jx2lYQltNsQSptGAjEKg-s4A53kJ0ANuRBUDK6zb_QPYHq16uFjl6JoRb2SRnWaeZN2M-4CTiFl1lr6dCvognikQi95m0Rt_KO7kxchveIM3ny8bWtManabEk7WF7PZ4Y-fIQuhCp0AfcMAdzBhSbThy2Ww-xKcPe6PqCnwZxOVJe0JCiUoVhFDEXNJdAFwKeiNTlaZz_sLaqkBS9oigyBEVCX2DOcpFp2mX1F04m4WwmuwL1FFN8Cl_3T7GpsUHl2zDC_XYsVDWbcmcfm33ZAAj-PF8KsoIZ8_TZC6-bIpMmOeVtG3gdBJIqQyya6jUscbrf-I5H6DhC6RyQX99dz4hnJM5FBdsxPj915qWW4sm386lifVc2IKVKb0LnsEvX0ZzHX_USyXR6PLGG5Zo'
  },
  cache: new InMemoryCache()
})