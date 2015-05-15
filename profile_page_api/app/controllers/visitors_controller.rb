class VisitorsController < ApplicationController

  def send_now
    binding.pry
    UserMailer.welcome_email.deliver_now
  end

end
