<template>
    <section aria-label="section">
                <div class="container mt-5">
					<div class="row">
						<div class="col-md-8 offset-md-2">
							<h3>Don't have an account? Register now.</h3>
                            <p>Embark on your car rental journey by creating a personalized account. Simply provide your name, email address, and a secure password to get started. Your information is kept secure and private, ensuring a worry-free registration process. Start your adventure today with just a few clicks.</p>
							
							<div class="spacer-10"></div>
							
							<form name="contactForm" id='contact_form' class="form-border" method="post" action='blank.php'>

                                <div class="row">

                                    <div class="col-md-6">
                                        <div class="field-set">
                                            <label>Name:</label>
                                            <input type='text' name='name' id='name' class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="field-set">
                                            <label>Email Address:</label>
                                            <input type='text' name='email' id='email' class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="field-set">
                                            <label>Password:</label>
                                            <input type='text' name='password' id='password' class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="field-set">
                                            <label>Re-enter Password:</label>
                                            <input type='text' name='re-password' id='re-password' class="form-control">
                                        </div>
                                    </div>


                                    <div class="col-md-12 mt-5">

                                        <div id='submit' class="pull-left">
                                            <input type='submit' id='send_message' value='Register Now' class="btn-main color-2">
                                        </div>

                                    </div>

                                </div>
                            </form>
							
						</div>
                    </div>
				</div>
            </section>
</template>