class UserMailer < ActionMailer
  default from: "from@example.com"

  def welcome_email
    @user = user
    @url  = 'http://example.com/login'
    mail(to: iljagou@yahoo.com, subject: 'Welcome to My Awesome Site', body: "test test test")
  end
end
