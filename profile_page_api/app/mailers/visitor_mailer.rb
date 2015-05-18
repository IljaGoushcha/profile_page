class VisitorMailer < ActionMailer::Base
  # default from: "iljagou@yahoo.com" # this should not be a default in my case, rather optional e-mail from user

  def message_from_visitor
    @greeting = "Hi"

    mail to: "iljagou@yahoo.com", subject: "message from profile page visitor"
  end
end
