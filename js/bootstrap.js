system.use("com.joyent.Sammy");
system.use("com.joyent.Resource");

GET("/", function() {
  return redirect("/index.html");
});
