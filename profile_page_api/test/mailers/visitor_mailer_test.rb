require 'test_helper'

class VisitorMailerTest < ActionMailer::TestCase
  test "message_from_visitor" do
    mail = VisitorMailer.message_from_visitor
    assert_equal "Message from visitor", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
