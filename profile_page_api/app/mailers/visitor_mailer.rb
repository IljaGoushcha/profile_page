class VisitorMailer < ActionMailer::Base
  default from: "from@example.com"

  def message_from_visitor
    @greeting = "Hi"

    mail to: "to@example.org", subject: "message from profile page visitor"
  end
end
