# Preview all emails at http://localhost:3000/rails/mailers/visitor_mailer
class VisitorMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/visitor_mailer/message_from_visitor
  def message_from_visitor
    VisitorMailer.message_from_visitor
  end

end
