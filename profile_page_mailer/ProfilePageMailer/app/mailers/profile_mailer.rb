class ProfileMailer < ActionMailer::Base
  default from: "from@example.com"

  def hello_from_profile
    mail(:to => "iljagou@yahoo.com", :subject => "message from profile")
    binding.pry
  end

end
